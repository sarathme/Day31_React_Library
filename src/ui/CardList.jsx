import AddButton from "./AddButton";
import EmptyData from "./EmptyData";

function CardList({ data, render, title }) {
  const redirect = title.slice(0, title.length - 1).toLowerCase();

  return (
    <>
      <div className="card-list__header">
        <h2 className="list-title">{title.toUpperCase()}</h2>
        <AddButton />
      </div>
      <div className="flex wrap justify-center card-list">
        {data !== null && data.length === 0 && (
          <EmptyData
            message={`No ${title} available`}
            redirectText={`Add New ${title}`}
            redirectLink={`/${redirect}/create`}
          />
        )}
        {data !== null && data.map(render)}
        {data === null && render}
      </div>
    </>
  );
}

export default CardList;
