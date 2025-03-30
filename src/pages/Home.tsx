import HeadSection from "../components/Home/head-section";
import EventSection1 from "../components/Home/event-1";
import EventSection3 from "../components/Home/event-3";
import EventSection4 from "../components/Home/event-4";
import EventSection5 from "../components/Home/event-5";

function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 text-gray-800 overflow-hidden">
      <HeadSection />
      <EventSection1
        id="mandap-muhrat"
        title="Mandap Muhrat"
        date="April 19, 2025"
        time="9:00 AM Onwards"
        location="6 Vishat Villa, opposite Kalhar Bungalows, near kanak Dhara,Shilaj,Ahmedabad"
        mapUrl="https://maps.app.goo.gl/k9tuyXRgVT7L5fu17"
        bgColor="from-rose-100 to-rose-200"
        accentColor="rose-500"
        description="Join us for the auspicious Mandap Muhrat ceremony as we begin our wedding celebrations with blessings and rituals."
        imageUrl={""}
      />
      {/* <EventSection2
        id="haldi-game-night"
        title="Haldi & Game Night"
        date="April 19, 2025"
        time="6:00 PM Onwards"
        location="6 Vishat Villa, opposite Kalhar Bungalows, near kanak Dhara,Shilaj,Ahmedabad"
        mapUrl="https://maps.app.goo.gl/k9tuyXRgVT7L5fu17"
        bgColor="from-amber-100 to-yellow-200"
        accentColor="amber-500"
        description="Experience the traditional Haldi ceremony followed by a fun-filled game night with family and friends."
        imageUrl={""}
      /> */}
      <EventSection3
        id="garba-night"
        title="Garba Night"
        date="April 20, 2025"
        time="7:00 PM Onwards"
        location="Mahendra farm, Shilaj, Gujarat 380059"
        mapUrl="https://maps.app.goo.gl/ih5qZZDcZ6CvWXRw9"
        bgColor="from-green-100 to-emerald-200"
        accentColor="emerald-500"
        description="Dance the night away at our vibrant Garba celebration with music, colors, and traditional dance."
        imageUrl="/placeholder.svg?height=400&width=600"
      />
      <EventSection4
        id="marriage"
        title="Marriage Ceremony"
        date="April 21, 2025"
        time="10:00 AM - 3:00 PM"
        location="Nr.Hathijan Circle mahemdavad, highway, Ahmedabad, Gujarat 380050"
        mapUrl="https://maps.app.goo.gl/dNsoQRh8471AdyCo8"
        bgColor="from-red-100 to-red-200"
        accentColor="red-500"
        description="Join us for our wedding ceremony as we exchange vows and begin our journey together with your blessings."
        imageUrl="/placeholder.svg?height=400&width=600"
      />
      <EventSection5
        id="reception"
        title="Reception"
        date="April 22, 2025"
        time="7:00 PM  Onwards"
        location="Mahendra farm, Shilaj, Gujarat 380059"
        mapUrl="https://maps.app.goo.gl/ih5qZZDcZ6CvWXRw9"
        bgColor="from-purple-100 to-indigo-200"
        accentColor="purple-500"
        description="Celebrate our union with an elegant reception dinner, music, and festivities to mark the beginning of our new life."
        imageUrl="/placeholder.svg?height=400&width=600"
      />
    </main>
  );
}

export default Home;
