import CONSTANTS from "../../constants/constants";
import Introduction from "../../sections/Home/components/Introduction";
import Description from "../../sections/Home/components/Description";

export default function Home() {
  return (
    <section id="" className="w-full p-18 flex items-center shadow-lg border-b border-gray-200">
      <div className="flex justify-between gap-2">
          <Introduction name={CONSTANTS.NAME} role={CONSTANTS.FULL_STACK}/>
          <Description name={CONSTANTS.NAME}/>
      </div>
    </section>
  );
}

