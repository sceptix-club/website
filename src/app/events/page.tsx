"use client"
import EventCard from "@/components/Shared/EventCard";

const Events = ()=> {
  const eventCards = Array.from({ length: 10 });
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-1">
      {
        
        eventCards.map((_,index)=>(
          <EventCard key={index}/>
        ))
        
      }
    </div>
  );
}
export default Events