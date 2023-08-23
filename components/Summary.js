const Summary = () => {
    return  <div className="bg-white rounded-md mt-10 mb-10 p-5 shadow-md">
        <div className="mb-5">
            <h2 className="font-bold text-xl">ZooTools insights</h2>
            <p className="font-normal">Making analytics simple and actionable</p>
        
        </div>
        <div className="flex flex-row justify-between">
            <div>
                <h2 className="font-bold text-xl">Summary</h2>
                <div className="flex flex-row gap-3 mt-4 items-center">
                    <div className="flex flex-row justify-center items-center rounded-md" style={{height: "30px", width: "30px", backgroundColor: "red"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                    <p className="text-sm"><span className="font-bold">Signups are slowing down. </span>-5% new than last week</p>
                </div>
                <div className="flex flex-row gap-3 mt-4 items-center">
                    <div className="flex flex-row justify-center items-center rounded-md" style={{height: "30px", width: "30px", backgroundColor: "rgb(136, 223, 5)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                        </svg>
                    </div>
                    <p className="text-sm"><span className="font-bold">80% </span>of your signups were invited by other members.</p> 
                </div>
                <div className="flex flex-row gap-3 mt-4 items-center">
                    <div className="flex flex-row justify-center items-center rounded-md" style={{height: "30px", width: "30px", backgroundColor: "rgb(255, 211, 11)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
                            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                        </svg>
                    </div>
                    <p className="text-sm"><span className="font-bold">80% </span>of your signups were invited by a friend.</p>
                </div>
                <div className="flex flex-row gap-3 mt-4 items-center"> 
                    <div className="flex flex-row justify-center items-center rounded-md" style={{height: "30px", width: "30px", backgroundColor: "rgb(255, 211, 11)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
                            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                        </svg>
                    </div>
                    <p className="text-sm"><span className="font-bold">80% </span>of your signups were invited by a friend.</p>
                </div>
            </div>
            <div>
                <h2 className="font-bold text-xl">Recommendation</h2>
                <p className="mt-5 font-bold text-sm">Make sure to promote and share your form</p>
                <p className="mt-6 font-bold text-sm">Congrats! This is huge. Keep giving rewards for your users</p>
            </div>
        </div>
    </div>
}

export default Summary;