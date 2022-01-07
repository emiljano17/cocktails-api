const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="custom__pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="custom__page__item">
              <a
                onClick={(e) => {
                  paginate(number);

                  let active = false;

                  if (parseInt(e.target.text) === parseInt(number)) {
                    active = true;
                  } else {
                    active = false;
                  }

                  if (active) {
                    e.target.classList.add("active");
                  }
                }}
                href="#!"
                className="custom__page__link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
