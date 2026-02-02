from fastapi import FastAPI
from app.routes import auth, product, cart, admin, payment, checkout, order, admin_orders
from app.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Handicraft Backend")

app.include_router(auth.router)
app.include_router(product.router)
app.include_router(cart.router)
app.include_router(admin.router)
app.include_router(payment.router)
app.include_router(checkout.router)
app.include_router(order.router)
app.include_router(admin_orders.router)
 