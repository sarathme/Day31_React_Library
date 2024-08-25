function CardList({ data, render, title }) {
  return (
    <>
      <h2 className="list-title">{title.toUpperCase()}</h2>
      <div className="flex wrap justify-center card-list">
        {data !== null && data.length === 0 && (
          <p>No {title.toLowerCase()} data in the library</p>
        )}
        {data !== null && data.map(render)}
        {data === null && render}
      </div>
    </>
  );
}

export default CardList;
