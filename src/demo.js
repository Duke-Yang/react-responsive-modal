import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';

const styles = {
  img: {
    maxWidth: '100%',
  },
};

class ModalDemo extends React.Component {
  constructor(props) {
    super(props);
    this.onOpenSimpleModal = this.onOpenSimpleModal.bind(this);
    this.onCloseSimpleModal = this.onCloseSimpleModal.bind(this);
    this.onOpenBigModal = this.onOpenBigModal.bind(this);
    this.onCloseBigModal = this.onCloseBigModal.bind(this);
    this.state = {
      openSimpleModal: false,
      openBigModal: false,
    };
  }

  onOpenSimpleModal() {
    this.setState({ openSimpleModal: true });
  }

  onCloseSimpleModal() {
    this.setState({ openSimpleModal: false });
  }

  onOpenBigModal() {
    this.setState({ openBigModal: true });
  }

  onCloseBigModal() {
    this.setState({ openBigModal: false });
  }

  render() {
    const { openSimpleModal, openBigModal } = this.state;
    return (
      <div>
        <button onClick={this.onOpenSimpleModal} className="btn btn-action" style={styles.btn}>Open centered modal</button>
        <button onClick={this.onOpenBigModal} className="btn btn-action" style={styles.btn}>Open big modal</button>

        <Modal open={openSimpleModal} onClose={this.onCloseSimpleModal} little>
          <h2>Simple centered modal</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
        </Modal>

        <Modal open={openBigModal} onClose={this.onCloseBigModal}>
          <h2>Big modal</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
          <img src="img/modal.png" alt="photo" style={styles.img} />
          <p>Mauris ac arcu sit amet dui interdum bibendum a sed diam. Praesent rhoncus congue ipsum elementum lobortis. Ut ligula purus, ultrices id condimentum quis, tincidunt quis purus. Proin quis enim metus. Nunc feugiat odio at eros porta, ut rhoncus lorem tristique. Nunc et ipsum eu ex vulputate consectetur vel eu nisi. Donec ultricies rutrum lectus, sit amet feugiat est semper vitae. Proin varius imperdiet consequat. Proin eu metus nisi. In hac habitasse platea dictumst. Vestibulum ac ultrices risus. Pellentesque arcu sapien, aliquet sed orci sit amet, pulvinar interdum velit. Nunc a rhoncus ipsum, maximus fermentum dolor. Praesent aliquet justo vitae rutrum volutpat. Ut quis pulvinar est.</p>
          <p>Sed et arcu fermentum, gravida dui eget, fringilla sem. Sed aliquam augue in mi pharetra, sit amet venenatis lacus gravida. Aliquam ut quam orci. Mauris a eros iaculis, euismod diam a, commodo sapien. Ut convallis felis nibh, non hendrerit lectus convallis eget. Mauris ornare quam ut consectetur posuere. Phasellus molestie elementum convallis. Etiam maximus, tellus eleifend scelerisque hendrerit, magna metus egestas justo, sit amet euismod mi ligula non purus. Aenean condimentum egestas ante sed rutrum. Integer scelerisque, purus sed suscipit interdum, felis dolor eleifend mi, vel viverra augue nulla sed elit. Mauris pretium blandit tortor, sit amet scelerisque sapien porta at. Proin dictum tellus eros, non sollicitudin lorem maximus non. Vivamus a nulla lorem.</p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<ModalDemo />, document.getElementById('demo'));
