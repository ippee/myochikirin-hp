import React from 'react';
import firebase from 'firebase/app'
import 'firebase/storage';

import '../assets/css/Download.css'
import bar from '../assets/img/bar.jpg';

class Download extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      downloadStyle: { backgroundImage: `url(${bar})` }
    };
  }

  onClickButton(e) {
    let filePath;

    switch (e.target.value) {
      case 'windows':
        filePath = "めうちきりんのメトロポリス_for_win.zip";
        break

      case 'mac':
        filePath = "めうちきりんのメトロポリス_for_mac.zip";
        break

      default:
        // do nothing
    }

    let storage = firebase.storage();
    let storageRef = storage.ref();
    let spaceRef = storageRef.child(filePath);

    spaceRef.getDownloadURL().then(function(url) {
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';

      xhr.onload = function() {
        window.location.href = url;
      };

      xhr.onerror = function() {
        alert(
          'ダウンロードに失敗しました。\n' +
          `${xhr.status}: ${xhr.statusText}`
        );
      }

      xhr.open('GET', url);
      xhr.send();

    }).catch(function(error) {
      alert('ダウンロードに失敗しました。\n' + error.message);
    })
  }

  render() {
    return (
      <div className="download">
        <div className="download bg" style={this.state.downloadStyle} />
        <div className="content">
          <h1>ダウンロード</h1>
          <div className="windows">
            <button className="download-button" value="windows" onClick={this.onClickButton}>
              <i className="icon-windows" /> Windows版 ダウンロード
            </button>
          </div>
          <div className="mac">
            <button className="download-button" value="mac" onClick={this.onClickButton}>
              <i className="icon-apple" /> macOS版 ダウンロード
            </button>
          </div>
          <div className="addition">
            <p>i) このゲームはOS付属ブラウザのレンダリングエンジンを使用します（Windows: Edge、macOS: Safari）。</p>
            <p>ii) このゲームはWindows 10 Home、およびmacOS Catalina 10.15.7にて開発されました。</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
