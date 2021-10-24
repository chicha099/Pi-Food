import react from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, setPage } from '../actions';
import { filterRecipesByType } from '../actions';
import './Sidebar.css';

export default function Sidebar() {
    const dispatch = useDispatch();
    const allTypes = useSelector((state) => state.types);

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    function handleFilterTypes(e) {
        dispatch(setPage(1));
        dispatch(filterRecipesByType(e.target.value));
    }

    return (
        <div className='SidebarDiv'>
            <div>
                {
                    allTypes && allTypes.map(t => {
                        let typeF = t.name[0].toUpperCase() + t.name.slice(1);
                        return (
                            <div className='Filter'>
                                <div>
                                    <button id={typeF} name="filters" value={t.name} className='ButtonFilterTypes' onClick={e => handleFilterTypes(e)} />
                                </div>
                                <label id={typeF.toLowerCase()} for={typeF} className='Label'>{typeF}</label>
                            </div>
                        )
                    })
                }
                <div className='Filter2'>
                    <div className='OriginalsNCreated'>
                        <div >
                            <button id='all' name="filters" value='all' onClick={e => handleFilterTypes(e)} className='ButtonFilterOther' />
                        </div>
                        <label for='all' className='Label'>All</label>
                    </div>
                </div>
            </div>
        </div>
    )
};