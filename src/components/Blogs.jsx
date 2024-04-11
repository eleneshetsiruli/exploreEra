import { BlogsData } from "../Data";
import { BlogsStyle } from "../homeFolder/homePage/HomeStyles";

export const Blogs = () => {
  return (
    <>
      <h1>Blogs</h1>
      <BlogsStyle>
        {BlogsData.map((el) => (
          <div key={el.id}>
            <BlogsContainer key={el.id} data={el} />
          </div>
        ))}
      </BlogsStyle>
    </>
  );
};

function BlogsContainer({ data }) {
  2;
  return (
    <div>
      <img src={data.url} alt="images" />
      <p>{data.title}</p>
    </div>
  );
}
