
import {usePagination, PaginationItemType} from "@nextui-org/react";
import {ChevronIcon} from "./ChevronIcon";
const PaginatiomCard = () => {
  const {activePage, range, setPage, onNext, onPrevious} = usePagination({
    total: 6,
    showControls: true,
    siblings: 10,
    boundaries: 10,
  });
  return (
    <div>PaginatiomCard</div>
  )
}

export default PaginatiomCard