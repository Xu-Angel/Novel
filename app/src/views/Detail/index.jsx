import React, { Component } from 'react'
import './index.scss'
import { getDetail } from '../../api/girl'
import { Link } from 'react-router-dom'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: null
    }
  }
  componentDidMount() {
    getDetail({
      uid: window.location.search.split('?id=')[1]
    }).then(rs => {
      this.setState({
        detail: rs.data.detail
      })
    })
  }
  render() {
    console.log( this.state.detail, 'i');
    return (
      <div className="detail-container">
        <Link to='./'>首页</Link>
        <div dangerouslySetInnerHTML={{ __html: this.state.detail && this.state.detail['自我介绍'] }}></div>
        <ul class="figure-list">
        {
          this.state.detail && this.state.detail['照片'].big.map((v, i) => 
            (
              <li key={i}>
                <figure style={{backgroundImage: 'url(' + v + ')'}}></figure>
              </li>
            )
          )
          }
          </ul>
      </div>
    );
  }
}

export default Detail
