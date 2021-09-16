import { IPagination } from '../types';

const Pagination: React.FC<IPagination> = ({
  articlesPerPage,
  totalArticles,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      className="container fixed-bottom d-flex align-items-end justify-content-end"
      style={{ position: 'fixed', zIndex: 99, transform: 'translate(-8px)' }}
    >
      <ul className="pagination" style={{ cursor: 'pointer' }}>
        {pageNumbers.map((pageNumber) => {
          return (
            <li key={pageNumber} className="page-item">
              <div className="page-link" onClick={() => paginate(pageNumber)}>
                {pageNumber}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
