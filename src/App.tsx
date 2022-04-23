import * as React from 'react';
import { VFC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MainFeaturedPost from './MainFeaturedPost';
import Header from './Header';
import Footer from './Footer';
import topImg from './images/top.png'; 
import logoImg from './images/manaLogo.png'; 
import apImg1 from './images/AIPlanner_1.png'; 
import apImg2 from './images/AIPlanner_2.png'; 
import apImg3 from './images/AIPlanner_3.png'; 

const sections = [
  { title: 'トップ', url: '#' }
  // { title: 'Design', url: '#' },
  // { title: 'Culture', url: '#' },
  // { title: 'Business', url: '#' },
  // { title: 'Politics', url: '#' },
  // { title: 'Opinion', url: '#' },
  // { title: 'Science', url: '#' },
  // { title: 'Health', url: '#' },
  // { title: 'Style', url: '#' },
  // { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: '株式会社mana',
  description:
    "このサイトは、株式会社manaのポートフォリオサイトです。",
  image: topImg,
  imageText: 'main image description'
};

const social={ name: 'Twitter', icon: TwitterIcon }
const myHistory="保有資格：ITストラテジスト、システムアーキテクト、応用情報技術者\n"
              +"　　　　　日商簿記2級、2級FP技能士、宅建、マーケティングビジネス実務検定B級\n"
              +"　　　　　Associate Cloud Engineer\n"
              +"得意分野：建築全般、不動産、マーケティング、Webシステム開発、データサイエンス\n"
              +"得意技術：Python,JavaScript,React,HTML,CSS,GCP\n\n"
              +"2010年　京都大学　工学部建築学科卒\n"
              +"2012年　京都大学　工学部研究科建築学専攻修了\n"
              +"　大学院では、鉄骨構造に関する研究を行う。\n\n"
              +"2012年4月〜2015年5月\n"
              +"　大手ゼネコンに就職し、オフィスビルの施工管理を行う。現場で各種建築工事がどのように行われるか学ぶ。"
              +"2015年12月　株式会社mana設立\n"
              +"2018年1月〜2021年6月\n"
              +"　設計事務所と協力し、建築設計業務、確認申請業務、BIMソフトウェアを使ったモデル作成業務などを行う。\n"
              +"また、建築と不動産の知見を生かしてシステム開発を行っており、現在も継続中である。"

const Blog: VFC = () => (
  <>
    <CssBaseline />
    <Container maxWidth="lg">
      <Header title="建築　×　IT　の境界を切り拓く" sections={sections} />
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />

        <Grid container alignItems="center" justifyContent="center" sx={{ mt: 3 }} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              manaについて
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={2}>
            <img style={{ width: '100%' }}  src= {logoImg} alt='description' />
          </Grid>
          <Grid item xs={10}>
            2015年設立。<br/>
            意匠・設備・法規・構造・施工にまたがる、建築に関するオールラウンドな知識・経験と、情報処理分野に関する専門性を生かし、
            建築業界に新たは価値の提供を行い、また、新たな働き方を提案する。
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" sx={{ mt: 3 }} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              プロジェクト
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              AIプランナー
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <img style={{ width: '100%' }}  src= {apImg1} alt='description' />
          </Grid>
          <Grid item xs={8}>
            設計事務所と進めている、営業システム開発プロジェクト。<br/>
            設計事務所では、注文住宅を求める顧客の要望を反映した、自由度の高い設計を武器に、
            受注件数を伸ばしていた。
          </Grid>
          <Grid item xs={4}>
            <img style={{ width: '100%' }}  src= {apImg2} alt='description' />
          </Grid>
          <Grid item xs={8}>
            しかし、自由度が高い故に、設計を型化できず、営業工数を減らすことができなかった。<br/>
            本プロジェクトでは、設計事務所に保存されている、これまでの顧客に提出した設計資料に注目し、
            再利用することで、新規顧客への営業工数を減らそうというものである。<br/>
            具体的には、顧客が希望する土地に対して、過去の設計案から適当なものを選別・提示し、
            顧客の住宅に対する規模感・予算感を明瞭にする。
          </Grid>
          <Grid item xs={4}>
            <img style={{ width: '100%' }}  src= {apImg3} alt='description' />
          </Grid>
          <Grid item xs={8}>
            その上で、住宅への希望をヒアリングし、設計案を作成することで、
            何度も設計案を見直すことなく、設計プラン確定・契約に至ることができる。
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" sx={{ mt: 3 }} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              代表取締役経歴
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              真鍋義貴
            </Typography>
            <div style={{whiteSpace: 'pre-line'}}>
              {myHistory}
            </div>
          </Grid>
          
        </Grid>
      </main>
    </Container>
    <Footer
      title="会社情報"
      description="2015年設立　東京都江東区東陽"
      social={social}
    />
  </>
);

export default Blog;
