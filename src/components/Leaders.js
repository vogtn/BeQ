import React from 'react'

export default class Leaders extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
  }

  render() {
    return (
      <div>
        <ul className='list-group'>
          <li className='list-group-item'>
            <span className="badge">{this.props.user.point}</span>
            {this.props.user.name}
          </li>
        </ul>
      </div>
    )
  }
}



<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>