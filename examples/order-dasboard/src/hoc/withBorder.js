export default function withBorder(OldComponent, config) {
  const { style = 'solid', color = 'black', width = '1px' } = config || {};

  return () => (
    <>
      <div style={{ border: `${width} ${style} ${color}`, padding: '20px' }}>
        <OldComponent />
      </div>
    </>
  );
}
