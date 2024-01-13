const utcTime = (t1, t2) => {
    console.log(t1, t2);
    const [at1, at2] = new Date(t1).toISOString().split("T");
    const [dt1, dt2] = new Date(t2).toISOString().split("T");
    const arrival_time = `${at1} ${at2.slice(0, 8)}`
    const departure_time = `${dt1} ${dt2.slice(0, 8)}`

    console.log(arrival_time, departure_time);
    return { arrival_time, departure_time }
}

module.exports = utcTime;