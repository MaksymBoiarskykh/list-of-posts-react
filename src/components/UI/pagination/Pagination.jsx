import { usePageArray } from "../../../hooks/usePagination";
import style from "./Pagination.module.css";

export const Pagination = ({ total, limit, activePage, changePage }) => {
  const list = usePageArray(total, limit);

  return (
    <div className={style.PaginationBlock}>
      {list.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={
            activePage === p ? `${style.Page} ${style.Active}` : style.Page
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
};
