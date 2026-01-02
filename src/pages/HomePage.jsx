import ButtonComponent from '../components/ButtonComponent.jsx';

function HomePage(){
  return (
    <>
    <section>
    
    <div className="grid grid-cols-2 p-10">
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-[4rem] leading-16 text-left">
          Generate inspiring quotes anytime, anywhere
        </h1>

        <p className="mt-10 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, ducimus! Sunt consequatur amet laboriosam mollitia quis rem, soluta a modi nobis optio itaque dignissimos et, ratione ut, assumenda quia tempore.
        </p>

        <ButtonComponent 
        label = "Confirm"
        />
      </div>

      <div>

      </div>
    </div>

    </section>
    </>
  );
}

export default HomePage;