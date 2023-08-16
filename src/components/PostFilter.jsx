import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => (
  <div className="filter-block">
    <MyInput
      value={filter.quarry}
      onChange={(e) => setFilter({ ...filter, quarry: e.target.value })}
      placeholder="поиск"
    />

    <MySelect
      value={filter.sort}
      sortPost={(e) => setFilter({ ...filter, sort: e.target.value })}
      defualtValue="сортировка"
      options={[
        { value: "title", name: "по названию" },
        { value: "body", name: "по описанию" },
      ]}
    />
  </div>
);

export default PostFilter;
