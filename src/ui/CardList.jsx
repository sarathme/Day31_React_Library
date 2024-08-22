function CardList({ data, render, title }) {
  return (
    <>
      <h1>{title.toUpperCase()}</h1>
      <div className="flex wrap justify-center card-list">
        {data !== null && data.map(render)}
        {data === null && render}
      </div>
    </>
  );
}

export default CardList;
