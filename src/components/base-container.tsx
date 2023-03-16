import classnames from 'classnames'

type BaseContainerProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<'div'>
>

const BaseContainer = ({
  children,
  className,
  ...props
}: BaseContainerProps) => {
  return (
    <div
      className={classnames('container mx-auto max-w-[750px]', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default BaseContainer
