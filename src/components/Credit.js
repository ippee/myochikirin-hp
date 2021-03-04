import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

import '../assets/css/Credit.css';
import star from '../assets/img/star.jpg';

class Credit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creditStyle: { backgroundImage: `url(${star})` }
    };
  }

  render() {
    return (
      <div className="credit">
        <div className="credit bg" style={this.state.creditStyle} />
        <div className="content">
          <h1>クレジット</h1>
          <PerfectScrollbar>
            <div class="section">
              <h2>制作</h2>
              <p>いっぺー</p>
            </div>
            <div class="section">
              <h2>使用素材</h2>
              <div class="item">
                <h3>画像</h3>
                <div className="maker">
                  <h4>Canva</h4>
                  <ul class="list">
                    <li><a target="_blank" rel="nofollow noopener noreferrer" href="https://www.canva.com/photos/MADGv5rcu7M-woman-walking-in-the-street-during-night-time/">"夜の間に通りを歩いている女性"</a> by Aleksandar Pasaric</li>
                    <li><a target="_blank" rel="nofollow noopener noreferrer" href="https://www.canva.com/photos/MAEEWnGpeF8-man-looking-out-of-window/">"Man looking out of window"</a> by ozgurdonmaz</li>
                    <li><a target="_blank" rel="nofollow noopener noreferrer" href="https://www.canva.com/photos/MAEEE0qEB1E-female-retro-tin-toy-robot-portrait/">"Female Retro Tin Toy Robot Portrait"</a> by ThomasVogel</li>
                    <li><a target="_blank" rel="nofollow noopener noreferrer" href="https://www.canva.com/photos/MADaAx-NWHE-milky-way-/">"天の川！"</a> by Sahil Malhotra</li>
                    <li><a target="_blank" rel="nofollow noopener noreferrer" href="https://www.canva.com/photos/MAC5MsKKatU-cat-on-the-moon-background/">"Cat on the moon background"</a> by ks2009q</li>
                  </ul>
                </div>
                <div className="maker">
                  <h4>Unsplash</h4>
                  <ul class="list">
                    <li><a target="_blank" rel="nofollow noopener noreferrer" href="https://unsplash.com/photos/_b4ppn1Ssgw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">"Downtown Park, Bellevue, United States"</a> by Elisha Terada</li>
                    <li><a target="_blank" rel="nofollow noopener noreferrer" href="https://unsplash.com/photos/F-pSZO_jeE8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">"429 Cornelius Rd, Cerulean, KY 42215, USA, United States"</a> by Jongsun Lee</li>
                    <li><a target="_blank" rel="nofollow noopener noreferrer" href="https://unsplash.com/photos/NwDSEPXr9og?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">"Downtown Bellevue at Night, Bellevue, United States"</a> by Dylan Mullins</li>
                  </ul>
                </div>
                <div className="maker">
                  <h4>写真AC</h4>
                  <ul class="list">
                    <li><a target="_blank" rel="nofollow noopener noreferrer" href="https://www.photo-ac.com/main/detail/1828030?title=%E3%83%90%E3%83%BC%E3%82%AB%E3%82%A6%E3%83%B3%E3%82%BF%E3%83%BC&searchId=2565206629">"バーカウンター"</a> by 河童</li>
                  </ul>
                </div>
              </div>
              <div class="item">
                <h3>フォント</h3>
                <ul class="list">
                  <li><a href="https://moji-waku.com/pigmo01/" target="_blank" rel="nofollow noopener noreferrer">"ピグモ 01"</a> by もじワク研究</li>
                  <li><a href="http://togoshi-font.osdn.jp/" target="_blank" rel="nofollow noopener noreferrer">"戸越ゴシック"</a> by mshio</li>
                </ul>
              </div>
              <div class="item">
                <h3>BGM</h3>
                <ul class="list">
                  <li>"めうちきりんのメトロポリス" by いっぺー</li>
                </ul>
              </div>
              <div class="item">
                <h3>SE</h3>
                <div className="maker">
                  <h4>Freesound</h4>
                  <ul class="list">
                    <li><a href="https://freesound.org/people/Zott820/sounds/209580/" target="_blank" rel="nofollow noopener noreferrer">"Entrance Bell"</a> by Zott820</li>
                    <li><a href="https://freesound.org/people/davidbain/sounds/136778/" target="_blank" rel="nofollow noopener noreferrer">"Page Turn"</a> by davidbain</li>
                    <li><a href="https://freesound.org/people/exterminat/sounds/164806/" target="_blank" rel="nofollow noopener noreferrer">"Page turns and book close/open"</a> by exterminat</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="section">
              <h2>使用技術</h2>
              <div class="item">
                <h3>プログラミング言語</h3>
                <ul class="list">
                  <li><a href="https://www.rust-lang.org/ja" target="_blank" rel="nofollow noopener noreferrer">Rust</a></li>
                  <li><a href="https://developer.mozilla.org/ja/docs/Web/JavaScript" target="_blank" rel="nofollow noopener noreferrer">JavaScript</a></li>
                </ul>
              </div>
              <div class="item">
                <h3>フレームワーク</h3>
                <ul class="list">
                  <li><a href="https://tauri.studio/" target="_blank" rel="nofollow noopener noreferrer">tauri</a></li>
                  <li><a href="https://vuejs.org/" target="_blank" rel="nofollow noopener noreferrer">Vue.js</a></li>
                </ul>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    );
  }
}

export default Credit;
