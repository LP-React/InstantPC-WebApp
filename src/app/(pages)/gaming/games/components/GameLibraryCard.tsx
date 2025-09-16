interface Props {
    name: any;
    header_path: any;
}

export const GameLibraryCard = ({ name, header_path }: Props) => {
    return (
        <div className="h-60 min-w-[140px] overflow-hidden rounded-md">
            <img
                src={header_path}
                alt={name}
                className="h-full w-full object-cover"
            />
        </div>
    )
}
