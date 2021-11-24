import { useHistory } from "react-router";
import { Input } from "antd";

const { Search: InputSearch } = Input;

const Search = () => {
  const history = useHistory();

  const onSearchHandeler = (value) => {
    if (value) {
      history.push(`/result?search_query=${value.trim()}`);
    } else {
      history.push("/");
    }
  };

  return (
    <div className="search">
      <InputSearch
        allowClear
        onSearch={onSearchHandeler}
        size="large"
        placeholder="I m looking for..."
        enterButton="Search"
      />
    </div>
  );
};

export default Search;
