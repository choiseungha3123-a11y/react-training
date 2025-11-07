import Tailbutton from "../components/TailButton"

export default function JotaiBt({cnt, setCnt}) {
  return (
    <div>
         <div className="w-full flex justify-center">
                <Tailbutton caption="증가" color="blue" onHandle={() => setCnt(cnt + 1)} />
                <Tailbutton caption="감소" color="orange" onHandle={() => setCnt(cnt - 1)} />
            </div>
    </div>
  )
}