const history = useHistory();

  useEffect(() => {
    let unlisten = history.listen((location) => {
      if (history.action === 'PUSH') {
      }
      if (history.action === 'POP') {
      }
    });

    return () => {
      unlisten();
    };
  }, [history]);