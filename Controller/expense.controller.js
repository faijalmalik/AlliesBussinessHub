exports.GetExpense = (req,res,next) => {
    res.status(200).json({
        Obj: {name:"faijal",loc:"UAE"}
    })
}

exports.postExpanse = (req,res,next) => {
    const name = req.body.name;
    const loc  = req.body.loc;

    res.status(201).json({
        msg: "resource created successful",
        obj: {id: new Date().toISOString(),
              name :name,
              loc:loc
        }
    })
}

exports.getAll = (req,res,next) => {
    res.status(200).json({msg:"get all called"})
}