import Home from '../sections/Home/Home';
import Experience from '../sections/Experience/Experience'
function Main() {
  return (
    <>
      <div className="flex flex-col items-center">
          <Home/>
          <Experience />
      </div>
    </>
  );
}

export default Main;
