import { NextResponse } from 'next/server';
import { MonasteryData } from '@/data/types';
import { monasteryData } from '@/data/monastery-data';

export const runtime = 'edge';

function searchMonasteries(query: string): MonasteryData[] {
  query = query.toLowerCase();
  return monasteryData.filter(monastery => {
    return (
      monastery.name.en?.toLowerCase().includes(query) ||
      monastery.description.en?.toLowerCase().includes(query) ||
      monastery.location.toLowerCase().includes(query)
    );
  });
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // Simple keyword-based response system
    const lowerMessage = message.toLowerCase();
    
    // Search for monastery info
    const relevantMonasteries = searchMonasteries(lowerMessage);
    
    if (relevantMonasteries.length > 0) {
      const monastery = relevantMonasteries[0];
      return NextResponse.json({
        message: `${monastery.name.en} is located in ${monastery.location}. ${monastery.description.en}`
      });
    }

    // Handle different types of questions
    if (lowerMessage.includes('when') && lowerMessage.includes('visit')) {
      return NextResponse.json({
        message: "Most monasteries in Sikkim are open daily from early morning to evening. The best time to visit is during festivals or in the spring and autumn months when the weather is pleasant."
      });
    }

    if (lowerMessage.includes('how') && lowerMessage.includes('reach')) {
      return NextResponse.json({
        message: "Most monasteries in Sikkim can be reached by taxi or local transport from major towns. It's recommended to hire a local guide who can help you navigate and provide historical context."
      });
    }

    if (lowerMessage.includes('festival') || lowerMessage.includes('celebration')) {
      return NextResponse.json({
        message: "Major monastery festivals include Losar (Tibetan New Year), Saga Dawa, and Lhabab Duchen. These festivals feature masked dances (Cham), ritual ceremonies, and cultural performances."
      });
    }

    // Default response
    return NextResponse.json({
      message: "I can help you with information about Sikkim's monasteries, their locations, visiting times, festivals, and cultural significance. Please feel free to ask specific questions!"
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process the request' },
      { status: 500 }
    );
  }
}
