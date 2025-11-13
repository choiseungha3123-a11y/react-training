import Tailbutton from "../components/TailButton"
import { useAtom } from "jotai"
import { cntAtom } from "./atomsCnt"

export default function JotaiBt() {
  const [cnt, setCnt] = useAtom(cntAtom)
  return (
    <div>
         <div className="w-full flex justify-center space-x-4">
                <Tailbutton caption="증가" color="blue" onHandle={() => setCnt(cnt + 1)} />
                <Tailbutton caption="감소" color="orange" onHandle={() => setCnt(cnt - 1)} />
            </div>
    </div>
  )
}