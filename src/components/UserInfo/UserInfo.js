import React, {PureComponent} from 'react';
import styles from './UserInfo.module.css';

import {connect} from 'react-redux';

class UserInfo extends PureComponent {
    render() {
        // Покажите статус загрузки
        // Если данные не были загружены - сообщите об этом пользователю
        const {data, isLoading} = this.props;

        if (isLoading)
            return (<p>Загрузка</p>);

        return data && (
            <div className={styles.root}>
                {/* Отобразите данные о пользователе */}
                <div className={styles.imageWrapper}>
                    <img className={styles.image}
                         src={data.avatar_url}
                         alt={'user info: ' + data.name}/>
                </div>
                <div>
                    <p className="t-user-name">{data.name}</p>
                    <p className="t-user-bio">{data.bio}</p>
                </div>
            </div>
        );
    }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({...state.user}))(UserInfo);
