<><div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
    <Person style={{ color: "rgb(210, 63, 87)", marginRight: 10 }} />
    <h2>Mon compte</h2>
</div><div className={styles.userappinfos}>
        <div className={styles.userwithphoto}>
            <div className={styles.userprofilephoto}>
                <img style={{ width: "100%", height: "100%", borderRadius: "50%", fill: "Background" }} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <div className={styles.datausername}>
                <span style={{ fontSize: 20, fontWeight: 500 }}> {user.data && user.data.user_name} </span>
                <div style={{ color: "grey", fontSize: 13 }}> <span> {user.data && user.data.email || "Utilisateur (client)"} </span> </div>
            </div>
        </div>

        <div className={styles.cssm860y2}>
            <div className={styles.userorderdetailitem}>
                <div className={styles.css1916bed}>
                    <h3 className={styles.css10dcflg}>16</h3>
                    <small style={{ textAlign: "center" }} className={styles.cssyeda23}>All orders</small>
                </div>
            </div>
            <div className={styles.userorderdetailitem}>
                <div className={styles.css1916bed}>
                    <h3 className={styles.css10dcflg}>02</h3>
                    <small className={styles.cssyeda23}>Awaiting payments</small>
                </div>
            </div>
            <div className={styles.userorderdetailitem}>
                <div className={styles.css1916bed}>
                    <h3 className={styles.css10dcflg}>00</h3>
                    <small className={styles.cssyeda23}>Awaiting shipment</small>
                </div>
            </div>
            <div style={{ marginRight: 0 }} className={styles.userorderdetailitem}>
                <div className={styles.css1916bed}>
                    <h3 className={styles.css10dcflg}>01</h3>
                    <small className={styles.cssyeda23}>Awaiting delivery</small>
                </div>
            </div>
        </div>
    </div><div className={styles.userinfos}>
        <div className={styles.userinfoitem}>
            <small className={styles.userinfoitemvalue}>Nom d'utilisateur</small>
            <span> {user.data && user.data.user_name} </span>
        </div>
        <div className={styles.userinfoitem}>
            <small className={styles.userinfoitemvalue}>Adresse mail</small>
            <span> {user.data && user.data.email || "Aucune ..."} </span>
        </div>
        <div className={styles.userinfoitem}>
            <small className={styles.userinfoitemvalue}>Numéro de téléphone</small>
            <span>+228{user.data && user.data.phone}</span>
        </div>
        {/* <div className={styles.userinfoitem}>
<small className={styles.userinfoitemvalue}>Birth date</small>
<span>06 Juillet 2023</span>
</div> */}
    </div></>