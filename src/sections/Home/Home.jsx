import CONSTANTS from "../../constants/constants";
import Introduction from "../../sections/Home/components/Introduction";
import Description from "../../sections/Home/components/Description";

function Home() {
  return (
    <section id="home" className="w-full h-1/2 p-18">
      <div className="flex justify-between gap-2">
          <Introduction name={CONSTANTS.NAME} role={CONSTANTS.WEB}/>
          <Description name={CONSTANTS.NAME}/>
      </div>
    </section>
  );
}

export default Home;
