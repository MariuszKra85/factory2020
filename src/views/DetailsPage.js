import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { routes } from 'routes/index';
import DetailsTemplate from '../Templates/DetailsTemplate';

class DetailPage extends Component {
  state = {
    pageType: 'note',
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.storeItem:
        this.setState({ pageType: 'store' });
        break;
      case routes.processItem:
        this.setState({ pageType: 'process' });
        break;

      case routes.scaleItem:
        this.setState({ pageType: 'scale' });
        break;

      case routes.chillItem:
        this.setState({ pageType: 'chill' });
        break;

      default:
        // eslint-disable-next-line no-console
        console.log('something went wrong!!!');
        break;
    }
  }

  render() {
    return <DetailsTemplate pageType={this.state.pageType} />;
  }
}

DetailPage.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object, PropTypes.node, PropTypes.any]).isRequired,
};

export default DetailPage;
