import React, {PureComponent} from 'react';
import styles from './followers.module.css';
import {fetchRequest, fetchFailure, fetchSuccess} from '../../modules/Followers';
import {connect} from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
    render() {
        // Покажите статус загрузки
        // Если данные не были загружены - сообщите об этом пользователю
        const {data, isLoading} = this.props;

        if (isLoading)
            return (<p>Загрузка</p>);

        return (
            <div className={cx(styles.root, 't-followers')}>
                {/*
                    Отобразите список пользователей.
                    Для каждого пользователя покажите имя и аватарку.
              */}
                {data && data.map(follower =>
                    <div className={styles.follower} key={follower.id}>
                        <img className={styles.followerImg} src={follower.avatar_url}/>
                        <p className={styles.followerLogin}>{follower.login}</p>
                    </div>
                )}
            </div>
        );
    }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({...state.followers}), {fetchRequest, fetchFailure, fetchSuccess})(Followers);
