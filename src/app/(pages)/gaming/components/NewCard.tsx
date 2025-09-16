export const NewCard = () => {
  return (
    <div className="h-[200px] w-[300px]">
      <div className="h-[40%] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://i.pinimg.com/736x/8e/05/a5/8e05a54e3ac0498d630b0737667cdaed.jpg"
          alt=""
        />
      </div>

      <div>
        <h4>Title</h4>
        <p>Subtitle</p>
      </div>
    </div>
  );
};
