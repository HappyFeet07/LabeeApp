import React, {
  useState
} from 'react';

import {
  useHistory
} from 'react-router-dom';
import MisinHistoryLayout from '../components/MisinHistory/MisinHistoryLayout';

const data = [
  {
    Name: 'Mission-1',
    MisionID: '1',
    MisionType: 'Ten',
    Date: '1010101010',
    Status: 'Audit Complete',
    Reward: '$100',
    Received: true,
  },
  {
    Name: 'Mission-2',
    MisionID: '2',
    MisionType: 'Hour',
    Date: '1010101010',
    Status: 'Audit Complete',
    Reward: '$1000',
    Received: true,
  },
  {
    Name: 'Mission-3',
    MisionID: '3',
    MisionType: 'Ten',
    Date: '1010101010',
    Status: 'Pending...',
    Reward: '$100',
    Received: false,
  },
  {
    Name: 'Mission-4',
    MisionID: '4',
    MisionType: 'Hour',
    Date: '1010101010',
    Status: 'Audit didnt pass',
    Reward: '$100',
    Received: false,
  },
  {
    Name: 'Mission-5',
    MisionID: '5',
    MisionType: 'Ten',
    Date: '1010101010',
    Status: 'Pending',
    Reward: '$500',
    Received: false,
  },
  {
    Name: 'Mission-6',
    MisionID: '6',
    MisionType: 'Hour',
    Date: '1010101010',
    Status: 'Audit Complete',
    Reward: '$100',
    Received: true,
  },
  {
    Name: 'Mission-7',
    MisionID: '7',
    MisionType: 'Hour',
    Date: '1010101010',
    Status: 'Audit didnt pass',
    Reward: '$100',
    Received: false,
  },
  {
    Name: 'Mission-4',
    MisionID: '4',
    MisionType: 'Hour',
    Date: '1010101010',
    Status: 'Pending',
    Reward: '$100',
    Received: false,
  },
  {
    Name: 'Mission-4',
    MisionID: '4',
    MisionType: 'Hour',
    Date: '1010101010',
    Status: 'Audit Complete',
    Reward: '$100',
    Received: false,
  }
]

const MisinHistory = (props) => {
  const [SearchValue, setSearchValue] = useState('')
  const history = useHistory();

  const goBackOnClick = () => {
    history.goBack()
  }
  return (
    <MisinHistoryLayout
      data={data}
      SearchValue={SearchValue}
      setSearchValue={setSearchValue}
      goBackOnClick={goBackOnClick}
    >
    </MisinHistoryLayout>
  )
}

export default MisinHistory;