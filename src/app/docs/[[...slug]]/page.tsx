interface IParams {
  params: {
    slug: string[];
  };
}

const Docs = ({ params }: IParams) => {
  if (params.slug?.length === 2) {
    return (
      <div>
        <h1>Docs of Features</h1>
        <p>
          Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </p>
      </div>
    );
  } else if (params.slug?.length === 1) {
    return (
      <div>
        <h1>Docs of Concept</h1>
        <p>Viewing docs for feature {params.slug[0]} </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Docs Home Page</h1>
      <p>Slug: {params.slug?.join("/")}</p>
    </div>
  );
};

export default Docs;
