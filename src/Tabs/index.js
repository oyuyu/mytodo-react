import React, {Fragment} from 'react';
import { Tabs, Button } from 'antd';

const { TabPane } = Tabs;    //子标签
 
export default class Tab extends React.Component{
   
    render(){
        const slide=<Fragment>
            显示：
            <Button> tab bar额外元素</Button>
        </Fragment>
        
        return(
            <Tabs
                tabBarExtraContent={slide}
            >
                <TabPane
                    tab='待办事项'  //标签名
                    key='1'
                >
                    做到极致
                </TabPane>
                <TabPane  tab='紧急事项' key='2'>
                    哈哈哈
                </TabPane>
                
            
            </Tabs>
        )
    }

}

