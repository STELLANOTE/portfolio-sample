// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { styled} from 'styled-components';


const getUrl = (url: string) => {
  return `${ process.env.PUBLIC_URL }/${ url }`
};

const WORKS_LIST = [
  {
    name: '制作物A',
    description: '説明文................................................................',
    linkUrl: getUrl('static/works/bingo/index.html'),
    imageUrl: getUrl('static/images/works_clock.jpeg'),
  },
  {
    name: '制作物B',
    description: '説明文................................................................',
    linkUrl: getUrl('static/works/bingo/index.html'),
    imageUrl: getUrl('static/images/works_dim_cafe.jpeg'),
  },
  {
    name: '制作物C',
    description: '説明文................................................................',
    linkUrl: getUrl('static/works/bingo/index.html'),
    imageUrl: getUrl('static/images/works_japan_autumn.jpeg'),
  },
];


function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar>
          <div>
            <span className="navItem">
              ホーム
            </span>
            <span className="navItem">
              制作物一覧
            </span>
          </div>
        </NavigationBar>

        <HeroImage>
          <h1 className="heroText">
            こちらはポートフォリオのサンプルです
          </h1>
        </HeroImage>
      </header>

      <main>
        <WorksContainer>
          {
            WORKS_LIST.map((workData, index) => {
              console.log(`WORKS_LISTの${ index }番目の中身です`, workData);

              return (
                <div className="workCard">
                  <div className="left">
                    {/* タイトル */}
                    <h2>{ workData.name }</h2>

                    {/* 制作物へのリンク */}
                    <a href={ workData.linkUrl } rel='noopener noreferrer'>
                      閲覧はこちら
                    </a>

                    {/* 説明文 */}
                    <div>{ workData.description }</div>
                  </div>

                  <div className="right">
                    {/* 画像表示 */}
                    <img src={ workData.imageUrl } />
                  </div>
                </div>
              );
            })
          }
        </WorksContainer>
      </main>
      
      <footer>
        <FooterCredits>
          フッターエリアに製作者のgitアカウント名などを記載しましょう
        </FooterCredits>
      </footer>
    </div>
  );
}

export default App;


const NavigationBar = styled.div`
display: flex;
align-items: center;
background-color: #1a2b3b;
height: 64px;
padding-right: 24px;

&> div {
  display: flex;
  justify-content: flex-end;
  column-gap: 12px;
  width: 100%;
  
  .navItem {
    display: inline-flex;
    font-size: 24px;
    color: lightgray;

    &:hover, &:active {
      color: white;
    }
  }
}
`;

const HeroImage = styled.div`
/* 幅と高さ */
width: 100%;
height: 600px;

/* 画像の設定 */
background-color: black;
background-image: url(${ () => getUrl('/static/images/hero.jpeg') });
background-position: center;
background-repeat: no-repeat;
background-size: cover;

/* 文字の中央配置 */
display: flex;
justify-content: center;
align-items: center;

/* 画像の上に配置する文字のスタイル */
.heroText {
  font-size: 48px;
  font-weight: bold;
  font-family: sans-serif;
  color: white;
  text-shadow: #000 1px 0 10px;
}
`;

const WorksContainer = styled.div`
display: flex;
flex-direction: column;
row-gap: 24px;
padding: 24px;


.workCard {
  display: flex;
  justify-content: space-between;
  column-gap: 12px;
  border: solid 2px #1a2b3b;
  border-radius: 8px;
  height: 400px;
  padding: 24px;
  
  .left {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    height: 100%;

    &> h2 {
      margin: 0;
      color: #1a2b3b;
    }

    &> a {
      text-decoration: none;
    }

    &> div {
      color: dimgray;
    }
  }
  
  .right {
    height: 100%;
    
    &> img {
      max-height: 100%;
    }
  }
}

`;

const FooterCredits = styled.div`
padding: 24px;
min-height: 64px;
background-color: #1a2b3b;
color: white;
`;
