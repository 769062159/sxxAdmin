import React, {Component} from 'react';
import Menusider from "../common/menu";
import {Layout} from "antd";
import MyHeader from "../common/header";
import MyFooter from "../common/footer";
import Banner from "../components/banner";
import { Route, Switch,Redirect} from 'react-router-dom'
import AuthRouter from "./AuthRouter";
import News from '../components/news'
import Industry from '../components/industryDynamic'
import Student from '../components/stuDynamic'
import Download from "../components/download";
import { withRouter } from 'react-router-dom'
import Media from "../components/Media";
import CourseUpload from '../components/course'
import NoFound from "../components/noFound";
const { Header, Footer, Sider, Content } = Layout;
class Home extends Component {
    componentDidMount() {

    }

    render () {
        return (
            <Switch>
                <AuthRouter path='/sxx/home/banner' exact component={ Banner }></AuthRouter>
                <AuthRouter path='/sxx/home/news'  component={ News }></AuthRouter>
                <AuthRouter path='/sxx/home/industry' component={ Industry }></AuthRouter>
                <AuthRouter path='/sxx/home/study' component={ Student }></AuthRouter>
                <AuthRouter path='/sxx/home/download'  component={ Download }></AuthRouter>
                <AuthRouter path='/sxx/home/media'  component={ Media }></AuthRouter>

                <AuthRouter path='/sxx/home/courseUpload'  component={ CourseUpload }></AuthRouter>
                <Route render={() => <Redirect to="/404"/>}/>
            </Switch>
        )
    }
}

class Page extends Component {
    render() {
        return (
            <Layout>
                <Sider className='sider-container'>
                    <Menusider />
                </Sider>
                <Layout>
                    <Header>
                        <MyHeader />
                    </Header>
                    <Content>
                        <Switch>
                            {/*<IndexRoute component={Home} />*/}
                            <Route path='/sxx/home'  component={Home}></Route>
                        </Switch>
                    </Content>
                    <Footer>
                        <MyFooter />
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(Page);