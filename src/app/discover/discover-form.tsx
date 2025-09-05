"use client";

import { useState, useEffect, useRef } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { generateContent } from "./actions";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles, Wand2 } from "lucide-react";
import Image from "next/image";

const initialState = {
  message: "",
  data: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Content
        </>
      )}
    </Button>
  );
}

export default function DiscoverForm() {
  const [state, formAction] = useActionState(generateContent, initialState);
  const { toast } = useToast();
  const [userLocation, setUserLocation] = useState<string | undefined>(undefined);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation(`${latitude}, ${longitude}`);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (state.message === "success") {
      toast({
        title: "Content Generated!",
        description: "Your educational content is ready below.",
      });
      formRef.current?.reset();
      setPreviewImage(null);
    } else if (state.message && state.message !== "success") {
       const errorMessage = state.errors ? 
        Object.values(state.errors).flat().join('\n') : 
        state.message;
        
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    }
  }, [state, toast]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
        setPreviewImage(null);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="image">Artifact Image</Label>
            {previewImage && (
                <div className="relative w-full h-64 rounded-md overflow-hidden border">
                    <Image src={previewImage} alt="Preview" fill className="object-cover"/>
                </div>
            )}
            <Input id="image" name="image" type="file" accept="image/*" required onChange={handleImageChange} />
             {state?.errors?.image && <p className="text-sm font-medium text-destructive">{state.errors.image[0]}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="e.g., A golden statue of Guru Rinpoche, about 3 feet tall, seen in the main prayer hall."
              rows={4}
              required
            />
            {state?.errors?.description && <p className="text-sm font-medium text-destructive">{state.errors.description[0]}</p>}
          </div>

          <input type="hidden" name="userLocation" value={userLocation || ""} />
          
          <SubmitButton />
        </form>

        {state?.data?.educationalContent && (
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-2xl font-headline font-bold flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Generated Content
            </h3>
            <div className="mt-4 prose dark:prose-invert max-w-none">
              <p>{state.data.educationalContent}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
