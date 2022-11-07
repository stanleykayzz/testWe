import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Book from './Book';
import BookEntity from '../Entities/BookEntity';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    axios.get('https://anapioficeandfire.com/api/books')
      .then((response) => {
        const result = response.data;
        setBooks(result);
      });
  };

  useEffect(() => getBooks(), []);

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <input type={"Text"}
                    placeholder="Search"
                    />
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="p-5 text-center" style={{backgroundImage : 'linear-gradient(256.5deg, rgb(216, 38, 68) -6.61%, rgb(110, 53, 126) 112.39%)'}}>
            <h1 className="mb-3">TestWe</h1>
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 141 29" aria-hidden="true" style={{width:'200px'}}><path d="M39.1958 21.65V10.0705H37.2495C36.8244 10.0705 36.4365 9.69035 36.4365 9.27384C36.4365 8.85734 36.8244 8.51025 37.2495 8.51025H39.1958V3.58823C39.1958 3.10231 39.55 2.72217 40.0459 2.72217C40.5418 2.72217 40.9297 3.10231 40.9297 3.58823V8.51025H46.59C47.015 8.51025 47.4029 8.89039 47.4029 9.3069C47.4029 9.7234 47.015 10.0705 46.59 10.0705H40.9263V21.4748C40.9263 24.0035 42.4476 24.906 44.5357 24.906C45.7736 24.906 46.3404 24.5589 46.5866 24.5589C46.9745 24.5589 47.3658 24.906 47.3658 25.3225C47.3658 25.6696 47.1533 25.9109 46.7991 26.0497C46.0907 26.291 45.2778 26.4993 44.2523 26.4993C41.4593 26.5026 39.1958 25.0117 39.1958 21.65Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M48.8506 17.3858C48.8506 22.8995 52.9558 26.6083 57.6952 26.6083C60.9504 26.6083 62.9676 25.4613 64.7284 23.7259C64.9409 23.5176 65.0118 23.3094 65.0118 23.1375C65.0118 22.6879 64.6238 22.3408 64.1651 22.3408C63.9188 22.3408 63.7401 22.4466 63.5984 22.5854C62.1513 23.9705 60.3466 25.0117 57.7627 25.0117C54.2275 25.0117 51.0095 22.4466 50.689 18.0436H64.8397C65.2648 18.0436 65.6898 17.6634 65.6898 17.2469C65.6898 12.1861 62.4717 8.09375 57.4119 8.09375C52.5308 8.09375 48.8506 12.1861 48.8506 17.3163V17.3858ZM57.3444 9.654C61.4834 9.654 63.5714 12.9497 63.8177 16.5197H50.6924C51.0128 12.6026 53.7721 9.654 57.3444 9.654Z" fill="white"></path><path d="M67.8112 24.2482C67.6695 24.1457 67.4941 23.8681 67.4941 23.5904C67.4941 23.1408 67.8821 22.7574 68.3442 22.7574C68.5567 22.7574 68.7692 22.8268 68.9109 22.9293C70.7864 24.2449 72.7665 24.9391 74.9254 24.9391C77.3676 24.9391 79.2769 23.6201 79.2769 21.5773V21.5079C79.2769 19.4287 77.0134 18.6651 74.5004 17.9709C71.5656 17.1379 68.3105 16.2718 68.3105 13.1183V13.0489C68.3105 10.2061 70.7493 8.15991 74.2541 8.15991C76.2005 8.15991 78.3593 8.78467 80.0898 9.75321C80.3023 9.89204 80.5486 10.1333 80.5486 10.5168C80.5486 10.9664 80.1607 11.3498 79.6985 11.3498C79.486 11.3498 79.3106 11.2804 79.2027 11.211C77.6442 10.3085 75.9137 9.75651 74.1799 9.75651C71.7039 9.75651 70.078 11.0754 70.078 12.8406V12.91C70.078 14.8868 72.5203 15.614 75.1008 16.3412C78.0018 17.1379 81.0444 18.1791 81.0444 21.2996V21.369C81.0444 24.5226 78.2851 26.5357 74.8174 26.5357C72.3752 26.539 69.653 25.6035 67.8112 24.2482Z" fill="white"></path><path d="M85.3921 21.65V10.0705H83.4458C83.0207 10.0705 82.6328 9.69035 82.6328 9.27384C82.6328 8.85734 83.0207 8.51025 83.4458 8.51025H85.3921V3.58823C85.3921 3.10231 85.7463 2.72217 86.2422 2.72217C86.738 2.72217 87.126 3.10231 87.126 3.58823V8.51025H92.7863C93.2113 8.51025 93.5992 8.89039 93.5992 9.3069C93.5992 9.7234 93.2113 10.0705 92.7863 10.0705H87.126V21.4748C87.126 24.0035 88.6473 24.906 90.7353 24.906C91.9733 24.906 92.54 24.5589 92.7863 24.5589C93.1742 24.5589 93.5655 24.906 93.5655 25.3225C93.5655 25.6696 93.353 25.9109 92.9988 26.0497C92.2904 26.291 91.4774 26.4993 90.452 26.4993C87.6556 26.5026 85.3921 25.0117 85.3921 21.65Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M100.107 24.6317L95.0841 10.6954C94.9762 10.4177 94.8716 9.96813 94.8716 9.62104C94.8716 8.61615 95.6845 7.68066 96.9596 7.68066C98.0222 7.68066 98.7272 8.37484 99.0477 9.34337L102.657 20.4369L106.3 9.34337C106.621 8.37153 107.396 7.68066 108.496 7.68066H108.742C109.839 7.68066 110.618 8.37484 110.935 9.34337L114.615 20.4369L118.258 9.31032C118.542 8.40789 119.213 7.68066 120.346 7.68066C121.513 7.68066 122.363 8.58309 122.363 9.62104C122.363 9.93177 122.259 10.3483 122.188 10.5565L117.094 24.6317C116.636 25.9143 115.752 26.5027 114.726 26.5027H114.585C113.522 26.5027 112.638 25.9143 112.251 24.7011L108.607 13.8158L104.927 24.7011C104.539 25.9143 103.655 26.5027 102.627 26.5027H102.485C101.416 26.5027 100.532 25.9143 100.107 24.6317Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M136.824 15.7562C136.541 13.0522 134.915 10.9366 132.085 10.9366C129.467 10.9366 127.625 12.9134 127.237 15.7562H136.824ZM132.58 26.6084C127.166 26.6084 122.994 22.7607 122.994 17.1081V17.0387C122.994 11.8026 126.778 7.50537 132.122 7.50537C138.065 7.50537 141 12.2886 141 16.5197C141 17.6998 140.079 18.5295 138.983 18.5295H127.274C127.733 21.5111 129.892 23.1739 132.651 23.1739C134.456 23.1739 135.869 22.5491 137.074 21.5806C137.391 21.3359 137.674 21.2004 138.17 21.2004C139.124 21.2004 139.867 21.9276 139.867 22.8995C139.867 23.4185 139.62 23.8713 139.3 24.1821C137.603 25.6696 135.481 26.6084 132.58 26.6084Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9725 28.9554C12.8072 29.0149 12.6251 29.0149 12.4598 28.9554C-0.311278 24.6184 -0.122377 14.2984 0.0361652 6.75175C0.0665243 5.93857 0.0665243 5.15515 0.0665243 4.40478C0.0665243 3.98166 0.420714 3.68747 0.849116 3.63788C5.60875 3.07263 8.50974 2.25945 12.1697 0.163711C12.4935 -0.044541 12.8848 -0.0643745 13.2626 0.163711C16.9395 2.08095 19.8404 2.9371 24.5798 3.63788C25.0116 3.70069 25.3658 3.98166 25.3658 4.40478C25.3658 5.15515 25.3793 5.92866 25.3962 6.75175C25.5547 14.2984 25.7436 24.6184 12.9725 28.9554ZM1.6156 5.78697C1.60821 6.11483 1.60069 6.44781 1.60069 6.78815C1.44215 14.1927 1.28024 23.3954 12.7088 27.4183C24.1373 23.3954 23.972 14.1927 23.827 6.78815C23.8239 6.61926 23.8202 6.45218 23.8166 6.28673C23.8082 5.90492 23.8 5.5318 23.8 5.16511C19.1449 4.3354 16.136 3.55198 12.7121 1.77027C9.10615 3.65776 6.11071 4.64943 1.62768 5.1618C1.62504 5.36848 1.62035 5.57667 1.6156 5.78697Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4772 20.3344C11.8497 20.3344 11.2257 20.0997 10.7467 19.6336L5.59576 14.5893C4.64451 13.6505 4.64451 12.1365 5.59576 11.201C6.55376 10.2655 8.09871 10.2655 9.05333 11.201L12.4738 14.5562L24.857 2.51725C25.8116 1.58507 27.3599 1.58507 28.3145 2.51725C29.2691 3.45273 29.2691 4.96999 28.3145 5.90878L14.2009 19.6402C13.7286 20.0997 13.1046 20.3344 12.4772 20.3344Z" fill="#E2284A"></path></svg>
          </div>
      </header>

      <div className="container-md text-center ">
        <h1>Books Page</h1>
        <h2>Selectionnez un livre</h2>
        <h3>Puis selectionnez un personnage dans les listes de la popup qui s'affiche.</h3>

        <div className='bookList row'>
          {
            books.map((book:BookEntity) => {
              return (
                <Book
                name={book.name}
                authors={book.authors}
                characters={book.characters}
                country={book.country}
                isbn={book.isbn}
                mediaType={book.mediaType}
                numberOfPages={book.numberOfPages}
                url={book.url}
                povCharacters={book.povCharacters}
                publisher={book.publisher}
                released={book.released}
                />);
            })
          }
        </div>
      </div>
    </div>
  );

};

export default BookList;