
const Zero   = f => z => z
const Succ   = n => f => z => f (n (f) (z))


const Pred   = n => f => x => n (g => h => h (g (f))) (c => x) (Id)
const Minus  = m => n => n (Pred) (m)
const IsZero = n => n (f => False) (True)
const LessEq = m => n => IsZero (Minus (m) (n))
const Greatr = m => n => Not (LessEq (m) (n))

// const Nil    = x => c => x
// const Cons   = h => t => x => c => c (h) (t)

// const Cons   = (h, t) => s => s (h, t)
// let l1 = s => s (1) (Nil)
// p - predicate, l - list, h - head, t - tail
// const Y     = f => (x => f (x (x)))(x => f (x (x)))
// const IsZeroJs = n => n == 0 ? True : False
// const LessEqJs = m => n => { console.log('l', m, n); return m <= n ? True : False }
// const GreatrJs = m => n => { console.log('g', m, n); return m >  n ? True : False }



const Id     = x => x
const Flip   = f => x => y => f (y) (x)

const True   = t => f => t
const False  = t => f => f
const Not    = b => b (False) (True)

const Nil    = x => True
const Cons   = h => t => s => s (h) (t)
const IsEmpty= l => l (h => t => False)

const toListJs = (lambdaList, jsList = []) => {
  lambdaList(x => {
    jsList.push(x)
    return y => toListJs(y, jsList)
  })
  return jsList
}

const toListChurch = (jsList) => {
  let res = Nil
  for (let i = jsList.length - 1; i >= 0; i--) {
    res = Cons (jsList[i]) (res)
  }
  return res
}

//const LessEqJs = m => n => m <= n ? True : False
//const GreatrJs = m => n => m >  n ? True : False

const LessEqJs = m => n => { console.log('l', m, n); return m <= n ? True : False }
const GreatrJs = m => n => { console.log('g', m, n); return m >  n ? True : False }


const Z     = f => (x => f (v => ((x (x)) (v)))) (x => f (v => ((x (x)) (v))))


const FLCat = f => x => y => x (y) (h => t => Cons (h) (f (t) (y)))
const LCat  = Z (FLCat)


const FFlter = f => p => l => l (h => t => ((p (h)) (Cons (h)) (Id)) (f (p) (t))) (Nil)
const Filter = Z (FFlter)

const FQSortJs = f => l => l (h => t => LCat (f (Filter ((Flip (LessEqJs)) (h)) (t))) (Cons (h) (f (Filter ((Flip (GreatrJs)) (h)) (t))))) (Nil)
const QSortJs  = Z (FQSortJs)

toListJs(QSortJs(toListChurch([2,1,4,3,8,5])))
toListJs(toListChurch([2,1,4,3,8,5]))




const toBool = (churchBoolean) => churchBoolean (true) (false)
const toNumber = (churchNumeral) => churchNumeral((x) => x+1) (0)

const toNumeral = (n) => (f) => (z) => {
  for (let i = 0; i < n; i++) z = f(z)
  return z
}




Y      = λf.(λx.f (x x))(λx.f (x x))
Z      = λf.(λx.f (λv.((x x) v))) (λx.f (λv.((x x) v)))


Id     = λx.x
Flip   = λf.λx.λy.f y x

True   = λt.λf.t
False  = λt.λf.f
Not    = λb.b False True

Zero   = λf.λx.x
Succ   = λn.λf.λx.f (n f x)

Pred   = λn.λf.λx.n (λg.λh.h (g f)) (λc.x) Id
Minus  = λm.λn.(n Pred) m
IsZero = λn.n (λf.False) True
LessEq = λm.λn.IsZero (Minus m n)
Greatr = λm.λn.Not (LessEq m n)

Nil    = λx.λc.x
Cons   = λh.λt.λx.λc.c h t

FLCat  = λf.λx.λy.x y (λh.λt.Cons h (f t y))
LCat   = Y FLCat

FFlter = λf.λp.λl.l Nil (λh.λt.((p h) (Cons h) Id) (f p t))
Filter = Y FFlter

FQSort = λf.λl.l Nil
                 (λh.λt.LCat (f (Filter ((Flip LessEq) h) t))
                              (Cons h (f (Filter ((Flip Greatr) h) t))))
QSort  = Y FQSort







