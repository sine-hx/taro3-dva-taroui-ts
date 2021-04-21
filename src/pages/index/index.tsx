import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtTimeline } from 'taro-ui'
import { connect } from 'react-redux'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/timeline.scss";
import "taro-ui/dist/style/components/icon.scss";
import './index.less'

@connect(({ index, loading }) => ({
  index,
  loading,
}))
export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    console.log(this.props?.index, '11111')
    return (
      <View className='index'>
        <AtTimeline
          items={[
            { title: '刷牙洗脸' },
            { title: '吃早餐' },
            { title: '上班' },
            { title: '睡觉' }
          ]}
        >
        </AtTimeline>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton>
      </View>
    )
  }
}
