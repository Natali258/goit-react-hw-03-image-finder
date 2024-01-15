import React from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { FetchImage } from 'services/api';

export class App extends React.Component {
  state = {
    search: '',
    page: 1,
    galleryImg: [],
    isLoadMore: false,
    isEmpty: false,
    showLoader: false,
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ showLoader: true });
      FetchImage(search, page)
        .then(({ data }) => {
          if (!data.hits.length) {
            this.setState({
              isEmpty: true,
              isLoadMore: false,
            });
            return;
          }
          this.setState(prev => ({
            galleryImg: [...prev.galleryImg, ...data.hits],
            isLoadMore: page < Math.ceil(data.total / 12),
          }));
        })
        .finally(this.setState({ showLoader: false }));
    }
  }

  searchName = search => {
    this.setState({
      search,
      isEmpty: false,
      galleryImg: [],
      page: 1,
      showLoader: true,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { galleryImg, isLoadMore, isEmpty, showLoader } = this.state;
    const loadMore = this.handleLoadMore;

    return (
      <div className="containerGallery">
        <Searchbar search={this.searchName} />
        <ImageGallery galleryImgs={galleryImg} />
        {isLoadMore && <Button loadMore={loadMore} />}
        {showLoader && <Loader />}

        {isEmpty && (
          <p>
            'Sorry, there are no images matching your search query. Please try
            again.
          </p>
        )}
      </div>
    );
  }
}
