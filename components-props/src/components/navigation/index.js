import './index.css';

export function Navigation() {
    return (
        <div className='navigation'>
            <a href='/' className='logo' >
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="20" />
                <span class="css-184keb2">React</span>
            </a>
            <nav className='tagNav'>
                <a href='/'> Documentos </a>
                <a href='/'> Tutorial </a>
                <a href='/'> Blog </a>
                <a href='/'> Comunidade </a>
            </nav>
            <form>
            <input className ='inputBuscar' type="search" placeholder="Buscar docs" />
            </form>
            <div> 
                <a href='/'> v17.0.1 </a>
                <a href='/'> Linguagens </a>
                <a href='/'> GitHub </a>
            </div>
        </div>
    )
}