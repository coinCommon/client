import React from 'react';
import classes from "../../css/index.module.scss";
import {useNavigate} from "react-router-dom";

const Navigation = ({data}) => {
    const navigate = useNavigate()
    return (
        <div className={classes.navigation_title}>

            <div className={classes.navigation}>

                {data.map(m =>
                    m.href === null ?
                        <div key={m.number} className={classes.child}>
                                {m.name}
                        </div>
                        :
                        <div key={m.number} className={classes.flex_space}>
                            <div className={classes.child_hover} onClick={() => navigate(m.href)}>
                                {m.name}
                            </div>
                            <div className={classes.child_slash}>
                                |
                            </div>
                        </div>
                )}

            </div>

            <h2>
                {data.length > 2 ?
                    data[2].name
                    :
                    data[1].name
                }
            </h2>
        </div>
    );
};

export default Navigation;