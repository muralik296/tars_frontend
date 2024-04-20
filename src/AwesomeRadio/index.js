import React, { useState } from 'react';
import styles from './AwesomeRadio.module.css'


export default function AwesomeRadio(props) {
    const { handleRadioChange } = props;
    return (
        <div className={styles.switch_field} style={{ margin: '10px 1rem' }}>
            {/* Radio for Files */}
            <React.Fragment key={1}>
                <input onChange={handleRadioChange}
                    type="radio"
                    id={1}
                    name='typeOfFile'
                    value='file'
                    defaultChecked />
                <label htmlFor='1'>
                    Files
                </label>
            </React.Fragment>

            {/* Radio for urls */}
            <React.Fragment key={2}>
                <input onChange={handleRadioChange}
                    type="radio"
                    id={2}
                    name='typeOfFile'
                    value='url'
                />
                <label htmlFor='2'>
                    URL
                </label>
            </React.Fragment>

        </div>
    )
}