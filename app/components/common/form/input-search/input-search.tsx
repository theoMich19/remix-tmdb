import { Search } from "lucide-react"
import * as React from "react"

import { Input, InputProps } from "~/components/common/ui/input"

const InputSearch = React.forwardRef<HTMLInputElement, InputProps>(
  ({ tabIndex, ...props }, ref) => {

    return (
      <div className="relative h-full">
        <Input
          ref={ref}
          {...props}
          type="text"
          tabIndex={tabIndex}
        />
        <Search className="absolute top-1 right-2 text-white"/>
      </div>
    )
  },
)

InputSearch.displayName = "InputSearch"

export default InputSearch
