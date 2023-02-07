

import { Tab } from '@headlessui/react'
import ItemChild from './ItemChild'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actGetUserBookingApi } from '../modules/action';
import getCookie from 'api/utils/helper';
import { useEffect } from 'react';
export default function Item() {
  const dispatch=useDispatch();
  let payload=useSelector(state=>state.bookingUserReducer);
  const renderItemChild=(payload)=>{
      const data=payload.data;
      if(data){
        const {Content}=data;
          return Content.map((item,index)=>{
            return(<ItemChild key={index} info={item}/>)
          })
      }
  }

  useEffect(()=>{
    const token=getCookie("token");
    dispatch(actGetUserBookingApi(token));
  },[])
 
  return (
   <div className=' list' data-toggle="buttons">
    <Tab.Group>
      <Tab.List>
      <Tab type="button " class="btn btn-outline-danger" as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button 
              className={
                selected ? 'btn btn-danger' : 'btn btn-outline-danger'
              }
            >
              Coming Soon
          
            </button>
          )}
        </Tab>
        <Tab type="button"  as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button  class="btn btn-outline-danger tab"
              className={
                selected ? 'btn btn-danger tab' : 'btn btn-outline-danger tab'
              }
            >
              Success
          
            </button>
          )}
        </Tab>
        <Tab type="button tab"  as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button  class="btn btn-outline-danger tab"
              className={
                selected ? 'btn btn-danger tab' : 'btn btn-outline-danger tab'
              }
            >
              Cancel
          
            </button>
          )}
        </Tab>
        {/* <Tab data-headlessui-state="" type="button" class="btn btn-outline-danger">Tab 1</Tab>
        <Tab type="button" class="btn btn-outline-danger">Tab 2</Tab>
        <Tab type="button" class="btn btn-outline-danger">Tab 3</Tab> */}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>    
        {/* Coming Soon */}
             {renderItemChild(payload)}
        </Tab.Panel>



        <Tab.Panel>
              {/* Thanh Cong */}
        <ItemChild></ItemChild>
        Content 2
        </Tab.Panel>
            {/* Huy */}
        <Tab.Panel>
          Content 3
          </Tab.Panel>
     </Tab.Panels>
    </Tab.Group>
    </div>
  )
}